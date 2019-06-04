'use strict'

import {HTMLComponentBase} from '../../html/components/base.js'
import {ExtJsComponentBase} from './base.js'

export class ExtJsComponentTreePanel extends ExtJsComponentBase {

    get titleProperties () {
        return ['title', ...super.titleProperties]
    }

    generateSelectors (titleOrSelector) {
        return [
            `${this.componentType}[text~="${titleOrSelector}"]`,
            ...super.generateSelectors(titleOrSelector)
        ]
    }

    select (callback, rowIndex = 0) {
        const cmp = this.extJsComponent
        let htmlElement = null
        let focusEl = null

        try {
            focusEl = document
                .getElementById(cmp.el.id)
                .getElementsByClassName('x-tree-view')[0]
            focusEl.focus();
            htmlElement = document
                .getElementById(cmp.el.id)
                .getElementsByClassName('x-grid-item')[rowIndex]
                //.getElementsByClassName('x-tree-node-text')[0]
        } catch (e) {
            return callback(`Failed to get element of "${this.componentType}" row #${rowIndex}": ${e}`)
        }
        
        new HTMLComponentBase({htmlElement, driver: this.driver}).click((err) => {
            return callback(err ? `Failed to click on tree row #${rowIndex} of "${this.componentType}" ": ${err}` : null)
        })
    }

    toggle (callback, rowIndex = 0) {
        const cmp = this.extJsComponent
        let htmlElement = null

        try {
            htmlElement = document
                .getElementById(cmp.el.id)
                .getElementsByClassName('x-grid-item')[rowIndex]
                .getElementsByClassName('x-tree-expander')[0]
        } catch (e) {
            return callback(`Failed to get element of "${this.componentType}" row #${rowIndex}": ${e}`)
        }

        new HTMLComponentBase({htmlElement, driver: this.driver}).click((err) => {
            return callback(err ? `Failed to click on tree row #${rowIndex} of "${this.componentType}" ": ${err}` : null)
        })
    }

}
