import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { caretAltDownIcon, checkboxCheckedIcon, paperclipIcon, parameterIntegerIcon, parameterStringIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { parseString } from "xml2js";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, DateInputsModule, KENDO_ICONS, KENDO_INPUTS, KENDO_DROPDOWNS, KENDO_LABEL],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Formbuilder Prototype';
  public paperClip: SVGIcon = paperclipIcon;
  public textbox: SVGIcon = parameterStringIcon;
  public numberfield: SVGIcon = parameterIntegerIcon;
  public checkboxChecked: SVGIcon = checkboxCheckedIcon;
  public arrowDown: SVGIcon = caretAltDownIcon;

  controls = [{ icon: this.textbox, label: 'Textfield' }, { icon: this.numberfield, label: 'Numberfield' }, { icon: this.checkboxChecked, label: 'Checkbox' }, { icon: this.arrowDown, label: 'Dropdown' }]


  xmlAsJson: XmlAsJson | undefined;
  xmlDOM: XMLDocument | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadXml();
  }

  loadXml() {
    this.http.get('assets/simple.xml', { responseType: 'text' }).subscribe(
      (data) => {
        parseString(data, (err, result) => {
          if (!err) {
            this.xmlAsJson = result;
            console.log('XML als JSON:', this.xmlAsJson);
          } else {
            console.error('Fehler beim Parsen:', err);
          }
        });
        const parser = new DOMParser();
        this.xmlDOM = parser.parseFromString(data, "application/xml");
        console.log('XML als DOM:', this.xmlDOM);
      },
      (error) => {
        console.error('Fehler beim Laden der XML-Datei:', error);
      }
    );
  }
}

export type XmlAsJson = {
  Properties: Array<Property>;
  DetailComponent: DetailComponent;
}

export type Property = {
  type: "String" | "List" | "Complex";
  name: string;
  displayName: string;
}

export type DetailComponent = {
  $: any;
  FlowLayout?: FlowLayout;
}

export type FlowLayout = Array<FlowLayoutAttributes>;
export type FlowLayoutAttributes = {
  $?: FlowLayoutAttributesAttribute;
  Cell?: Array<SingleCell>;
}

export type FlowLayoutAttributesAttribute =
  {
    row?: string;
  }

export type SingleCell = {
  $: any;
  Label?: Label;
  Textbox?: Textbox;
  Numberfield?: Numberfield;
  Combobox?: Combobox;
  FlowLayout?: FlowLayout;
}

export type Label = Array<LabelAttribute>;
export type LabelAttribute =
  {
    $: any;
  }

export type Textbox = Array<TextboxAttribute>;
export type TextboxAttribute =
  {
    $: any;
  }

export type Numberfield = Array<NumberfieldAttribute>;
export type NumberfieldAttribute =
  {
    $: any;
  }

export type Combobox = Array<ComboboxAttribute>;
export type ComboboxAttribute =
  {
    $: any;
  }