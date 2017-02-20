import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { BaseService } from './base.service'
import { AuthService } from './auth.service'
import { IBaseService } from './../interfaces/IBaseService'
import { IReportData } from './../interfaces/IReport'

@Injectable()
export class ReportService extends BaseService<IReportData> implements IBaseService {

  constructor(http: Http, auth: AuthService) {
    super(http, auth)
    super.setResource('reports')
  }

  getReport(plaque: string, start, finish): Observable<IReportData> {
    return this.http
      .get(`${API_URL}/report?plaque=${plaque}&&dtIni=${start}&dtEnd=${finish}`, this.headerOptions)
      .map(this.extractData)
      .catch(this.handleError)
  }

  getReportHtml(plaque: string, start, finish): Observable<string> {
    return this.http
      .get(`${API_URL}/report/printable?plaque=${plaque}&&dtIni=${start}&dtEnd=${finish}`, this.headerOptions)
      .map(this.extractDataHtml)
      .catch(this.handleError)
  }

  getPlaques(): Observable<any> {
    return this.http
      .get(`${API_URL}/equipments`, this.headerOptions)
      .map(data => {
        return data.json()
          .filter(equip => equip.install)
          .map(equip => equip.install.plaque)
      })
      .catch(this.handleError)
  }
}
