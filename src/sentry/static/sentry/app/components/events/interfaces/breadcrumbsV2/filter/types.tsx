import {BreadcrumbDetails, BreadcrumbType, BreadcrumbLevelType} from '../types';

type OptionBase = {
  symbol: React.ReactElement;
  isChecked: boolean;
  isDisabled: boolean;
  description?: string;
};

export type OptionType = {
  type: BreadcrumbType;
  levels: Array<BreadcrumbLevelType>;
} & OptionBase;

export type OptionLevel = {
  type: BreadcrumbLevelType;
} & OptionBase;

export type Option = OptionType | OptionLevel;

export {BreadcrumbDetails};
