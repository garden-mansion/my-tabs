import type { Tab } from '@/entities/tab';
import { getCustomDateFormatted, useNavigateToPage } from '@/shared/lib';
import { Button, Card, Stack, Typography } from '@mui/joy';

import {
  appendSelectedTabId,
  removeSelectedTabId,
  useIsTabIdInSelected,
} from '@/features/selected-tabs-reducer';

import { useMemo, type FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTab } from '@/features/current-tab-reducer';

import styles from '../scss/TabCard.module.scss';
import type { SxProps } from '@mui/joy/styles/types';

interface TabCardProps {
  tab: Tab;
  selectMode?: boolean;
  pathToTabPage: string;
}

export const TabCard: FC<TabCardProps> = ({
  tab,
  selectMode = false,
  pathToTabPage,
}) => {
  const { title, subtitle, date, id } = tab;

  const checked = useIsTabIdInSelected(id);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checked ? removeSelectedTabId(id) : appendSelectedTabId(id));
  };

  const handleGoToTabClick = useNavigateToPage(pathToTabPage, () =>
    dispatch(setCurrentTab(tab)),
  );

  const checkedStyle = useMemo<SxProps>(() => {
    if (!selectMode) {
      return {};
    }

    if (checked) {
      return {
        borderColor: 'blue',
      };
    }

    return {
      opacity: 0.5,
    };
  }, [checked, selectMode]);

  return (
    <Card
      variant="outlined"
      sx={{ justifyContent: 'space-between', ...checkedStyle }}
      className={styles['tab-card']}
      onClick={handleClick}
    >
      <Stack spacing={2}>
        <Stack>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography level="body-lg" noWrap>
              {title}
            </Typography>
          </Stack>

          <Typography level="body-md">{subtitle}</Typography>
        </Stack>
        <Typography level="body-sm">{getCustomDateFormatted(date)}</Typography>
      </Stack>

      <Button
        sx={{ alignSelf: 'flex-end' }}
        onClick={handleGoToTabClick}
        variant="outlined"
      >
        Перейти
      </Button>
    </Card>
  );
};
