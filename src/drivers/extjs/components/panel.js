'use strict'

import {ExtJsComponentBase} from './base.js'

export class ExtJsComponentPanel extends ExtJsComponentBase {

    get titleProperties () {
        return ['title', ...super.titleProperties]
    }

    generateSelectors (titleOrSelector) {
        return [
            `${this.componentType}[text~="${titleOrSelector}"]`,
            ...super.generateSelectors(titleOrSelector)
    ]
    }

}
