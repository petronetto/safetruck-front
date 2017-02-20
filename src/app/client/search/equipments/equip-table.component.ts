import {
  Component, ViewEncapsulation,
  trigger, style, transition,
  animate, Input
} from '@angular/core'

import { EquipmentType } from '../../../../interfaces/IEquipment'
import { Orientation } from '../../../../interfaces/IEquipmentInstall'
import { EVechicleType } from '../../../equipment/equipment-enums/equipment-vehicle-type-component'

@Component({
  selector: 'equipment-table',
  templateUrl: './equip-table.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./equip-table.styles.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void => *', [
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})

export class EquipmentTableComponent {
  @Input() data: Array<any>

  types = EquipmentType

  orientations = Orientation
  vehicleTypes = EVechicleType
}
