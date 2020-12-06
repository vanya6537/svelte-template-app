<!-- components/InputFile.svelte -->
<script>
import { items, files, alert } from '../stores';
import csvParser from 'papaparse';

import { getFilesFromInputEvent } from '../utils';
import { acceptedFileTypes as initialFileTypes } from '../constants';
export const acceptedFileTypes = initialFileTypes;
export let isLoading = true;
const fileReader = new FileReader();

let timer;
let needToFetch = false;

$: if ($files && $files.length) {
  // Note that `files` is of type `FileList`, not an Array:
  // https://developer.mozilla.org/en-US/docs/Web/API/FileList
  console.log($files);
  const file = $files[0];
  console.log(file.type);
  isLoading = true;
  fileReader.readAsText(file);
}

fileReader.onload = function () {
  try {
    // Try to parse as json
    items.set(JSON.parse(fileReader.result));
    setTimeout(() => {
      isLoading = false;
      alert.set('JSON parsing finished!');
    }, 1200);
  } catch (jsonErr) {
    // If we couldn't parse file as json - we can try to parse it as csv!
    try {
      // Here we use parsing by chunks, so we should reset items and fieldNames
      items.set([]);
      let fieldNames = null;
      csvParser.parse(fileReader.result, {
        worker: true,
        skipEmptyLines: true,
        complete: () => {
          setTimeout(() => {
            isLoading = false;
            alert.set('CSV parsing finished!');
          }, 1200);
        },
        step: (results) => {
          // Fields contains in first row, others are objects
          if (fieldNames) {
            // Form new object using fieldNames
            const newObject = fieldNames.reduce(
              (accumulate, fieldName, index) => ({
                ...accumulate,
                [fieldName]: results.data[index],
              }),
              {},
            );
            // Place new object into our items
            items.update((itemsList) => [...itemsList, newObject]);
          } else {
            // FieldNames are always at the first row
            fieldNames = results.data;
          }
        },
      });
    } catch (e) {
      console.error(e);
      items.set([]);
      isLoading = false;
    }
  }
};

fileReader.onerror = function () {
  files.set([]);
  alert.set('Error during processing files!');
  isLoading = false;

  console.log(fileReader.error);
};

const onFileInput = (e) => {
  const newFiles = getFilesFromInputEvent(e);
  alert.set('Processing file...');
  files.set(newFiles);
};
</script>

<!--  File Input  -->
<div>
  <label for="file-input">
    <i class="fa fa-cloud-upload"></i>
    Custom Upload File - CSV or JSON
  </label>
  <input
    id="file-input"
    type="file"
    accept="{acceptedFileTypes.join(', ')}"
    on:input="{onFileInput}"
  />
</div>

<style>
label {
  padding-top: 20px;
}

input[type='file'] {
  display: none;
}

label[for='file-input'] {
  cursor: pointer;
}
</style>
