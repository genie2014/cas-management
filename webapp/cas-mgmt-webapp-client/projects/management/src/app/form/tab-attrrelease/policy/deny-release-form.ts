import {BaseReleaseForm} from './base-release-form';
import {DenyAllAttributeReleasePolicy} from 'mgmt-lib';

export class DenyReleaseForm extends BaseReleaseForm<DenyAllAttributeReleasePolicy> {

  constructor(public policy: DenyAllAttributeReleasePolicy) {
    super(policy);
    this.setValue(super.formMap());
  }
}
