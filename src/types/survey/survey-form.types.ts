interface FormElements extends HTMLFormControlsCollection {
  age: HTMLInputElement
}

export interface AgeFormElements extends HTMLFormElement {
  readonly elements: FormElements
}
