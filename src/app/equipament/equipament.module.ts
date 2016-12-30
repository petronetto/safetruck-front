import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'

import { WidgetModule } from '../layout/widget/widget.module'
import { UtilsModule } from '../layout/utils/utils.module'
import { Ng2TableModule } from 'ng2-table'
import { ButtonsModule, PaginationModule } from 'ng2-bootstrap/ng2-bootstrap'

// libs
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime'
import { EquipamentRegisterPage } from './register/register.component'
import { EquipamentSearchPage } from './search/search.component'
import 'messenger/build/js/messenger.js'
import 'jasny-bootstrap/docs/assets/js/vendor/holder.js'
import 'jasny-bootstrap/js/fileinput.js'
import 'jasny-bootstrap/js/inputmask.js'
import 'ng2-datetime/src/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js'
// import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js'
// import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min.js'
import 'bootstrap-select/dist/js/bootstrap-select.js'
// import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.pt-BR.min.js'
// import 'bootstrap-markdown/js/bootstrap-markdown.js'
// import 'bootstrap-colorpicker'
// import 'bootstrap-slider/dist/bootstrap-slider.js'
// import { TooltipModule, AlertModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap'

export const routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: EquipamentRegisterPage},
  {path: 'search', component: EquipamentSearchPage}
]

@NgModule({
  declarations: [
    EquipamentRegisterPage,
    EquipamentSearchPage
  ],
  imports: [
    Ng2TableModule,

    ButtonsModule,
    PaginationModule,

    CommonModule,
    FormsModule,
    NKDatetimeModule,
    WidgetModule,
    UtilsModule,
    RouterModule.forChild(routes),
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export default class EquipamentModule {
  static routes = routes
}
