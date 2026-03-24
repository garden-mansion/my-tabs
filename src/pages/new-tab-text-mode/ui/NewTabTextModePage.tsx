import type { RootState } from '@/app/config';
import { appendTab } from '@/features/tabs-reducer';
import { saveTabsInStorage } from '@/features/tabs-reducer';
import { useNotification } from '@/shared/lib';
import { Stack, Typography } from '@mui/joy';
import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Notification } from '@/shared/ui';
import { TabDataForm } from '@/widgets/tab-data-form';
import {
  setWasSave,
  useGetNewTabFromForm,
  useHandleSubmitTabForm,
  useResetFormOnUnmount,
} from '@/features/tab-form-reducer';

export const NewTabTextModePage: FC = () => {
  const { tabs } = useSelector((root: RootState) => root.tabsReducer);
  const dispatch = useDispatch();

  const {
    isNotificationShown,
    notificationMessage,
    notificationColor,
    handleNotificationOpen,
    handleNotificationClose,
  } = useNotification();

  const createNewTab = useGetNewTabFromForm();

  const handleSubmit = useHandleSubmitTabForm(() => {
    const newTab = createNewTab();

    dispatch(appendTab(newTab));
    dispatch(setWasSave(true));

    handleNotificationOpen('Табулатура сохранена!', 'success');
  });

  useEffect(() => {
    saveTabsInStorage(tabs);
  }, [tabs]);

  useResetFormOnUnmount();

  return (
    <>
      <Stack
        spacing={2}
        sx={{
          alignItems: 'flex-start',
        }}
      >
        <Typography level="h2">Создание табулатуры</Typography>

        <TabDataForm handleSubmit={handleSubmit} />
      </Stack>

      <Notification
        message={notificationMessage}
        open={isNotificationShown}
        handleClose={handleNotificationClose}
        color={notificationColor}
      />
    </>
  );
};
