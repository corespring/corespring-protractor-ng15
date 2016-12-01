import _ from 'lodash'
import CorespringNg15Element from 'corespring-legacy-component-dependencies/support/corespring-ng15-element'
import 'corespring-legacy-protractor'

export default class CorespringTextEntryNg15Element extends CorespringNg15Element {
  _legacyHtml(){
    return '<protractor id="' + this.getAttribute('pie-id') + '"></protractor>';
  }
}


