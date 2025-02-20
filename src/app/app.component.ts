import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABEL } from '@progress/kendo-angular-label';
import { arrowDownIcon, caretAltDownIcon, checkboxCheckedIcon, paperclipIcon, parameterIntegerIcon, parameterStringIcon, SVGIcon, textboxIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DateInputsModule, KENDO_ICONS, KENDO_INPUTS, KENDO_DROPDOWNS, KENDO_LABEL],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Formbuilder Prototype';
  public paperClip: SVGIcon = paperclipIcon;
  public textbox: SVGIcon = parameterStringIcon;
  public numberfield: SVGIcon = parameterIntegerIcon;
  public checkboxChecked: SVGIcon = checkboxCheckedIcon;
  public arrowDown: SVGIcon = caretAltDownIcon;

  controls = [{ icon: this.textbox, label: 'Textfield' }, { icon: this.numberfield, label: 'Numberfield' },{ icon: this.checkboxChecked, label: 'Checkbox' }, { icon: this.arrowDown, label: 'Dropdown' }]
}
