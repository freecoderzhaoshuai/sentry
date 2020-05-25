import React from 'react';
import styled from '@emotion/styled';

import {t} from 'app/locale';
import space from 'app/styles/space';
import CheckboxFancy from 'app/components/checkboxFancy/checkboxFancy';

import {Option} from './types';

type Type = 'type' | 'level';

type Props = {
  options: Array<Option>;
  type: 'type' | 'level';
  onClick: (type: Type, option: Option) => void;
};

const OptionsGroup = ({type, options, onClick}: Props) => {
  const renderTitle = () => {
    return type === 'type' ? t('Type') : t('Level');
  };

  const renderIcon = ({symbol, isDisabled}: Option) => {
    return React.cloneElement(symbol, {
      isDisabled,
    });
  };

  const handleClick = (option: Option) => (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    onClick(type, option);
  };

  return (
    <div>
      <Header>{renderTitle()}</Header>
      <List>
        {options.map(option => (
          <ListItem
            key={option.type}
            isChecked={option.isChecked}
            onClick={handleClick(option)}
            isDisabled={option.isDisabled}
          >
            {renderIcon(option)}
            <ListItemDescription>{option.description}</ListItemDescription>
            <CheckboxFancy isChecked={option.isChecked} isDisabled={option.isDisabled} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export {OptionsGroup};

const Header = styled('div')`
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 400;
  background-color: ${p => p.theme.offWhite};
  color: ${p => p.theme.gray2};
  font-size: ${p => p.theme.fontSizeMedium};
  padding: ${space(1)} ${space(2)};
  border-bottom: 1px solid ${p => p.theme.borderDark};
`;

const List = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled('li')<{isChecked?: boolean; isDisabled?: boolean}>`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-column-gap: ${space(1)};
  align-items: center;
  padding: ${space(1)} ${space(2)};
  border-bottom: 1px solid ${p => p.theme.borderDark};
  cursor: ${p => (p.isDisabled ? 'not-allowed' : 'pointer')};
  :hover {
    background-color: ${p => p.theme.offWhite};
  }
  ${CheckboxFancy} {
    opacity: ${p => (p.isChecked ? 1 : 0.3)};
  }

  &:hover ${CheckboxFancy} {
    opacity: 1;
  }

  &:hover span {
    color: ${p => p.theme.blue};
    text-decoration: underline;
  }
`;

const ListItemDescription = styled('div')`
  font-size: ${p => p.theme.fontSizeMedium};
`;
