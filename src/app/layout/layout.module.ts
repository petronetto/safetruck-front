import 'jquery-slimscroll'

import { NgModule }      from '@angular/core'
import { CommonModule }  from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap'

import { ROUTES } from './layout.routes'

import { Layout } from './layout.component'
import { Sidebar } from './sidebar/sidebar.component'
import { Navbar } from './navbar/navbar.component'

@NgModule({
  imports: [CommonModule, TooltipModule, ROUTES, FormsModule],
  declarations: [
    Layout,
    Sidebar,
    Navbar
  ]
})
export default class LayoutModule {
}
