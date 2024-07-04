/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台 (BlueKing PaaS) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台 (BlueKing PaaS) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台 (BlueKing PaaS):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { Component } from 'vue-property-decorator';
import { Component as tsc } from 'vue-tsx-support';

import { Switcher } from 'bk-magic-vue';
import jsCookie from 'js-cookie';

import './time-formatter-switcher.scss';

@Component
export default class TimeFormatterSwitcher extends tsc<object> {
  get isFormatDate() {
    return this.$store.state.isFormatDate;
  }

  timeZone = new Date().toString().slice(24, 33);

  handleClickSwitcher(val) {
    jsCookie.set('operation', String(val));
    this.$store.commit('updateIsFormatDate', val);
  }
  render() {
    return (
      <div
        class='switcher-box'
        onClick={e => e.stopPropagation()}
      >
        <Switcher
          props={{
            'on-text': this.$t('时间'),
          }}
          off-text={this.$t('时间')}
          value={this.isFormatDate}
          // v-bk-tooltips={this.$t('开启后将表格内的 UNIX 时间戳格式化为可读时间')}
          show-text
          onChange={this.handleClickSwitcher}
        ></Switcher>
      </div>
    );
  }
}
