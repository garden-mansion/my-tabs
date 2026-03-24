import type { RootState } from '@/app/config';
import {
  loadDataInFormFromTab,
  setWasSave,
  useGetTabFromForm,
  useHandleSubmitTabForm,
  useResetFormOnUnmount,
} from '@/features/tab-form-reducer';
import { replaceTab } from '@/features/tabs-reducer';
import { saveTabsInStorage } from '@/features/tabs-reducer';
import { useNotification } from '@/shared/lib';
import { Notification } from '@/shared/ui';
import { TabDataForm } from '@/widgets/tab-data-form';
import { Stack, Typography } from '@mui/joy';
import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTabFromParams } from '../lib/useGetTabFromParams';

export const EditTabPage: FC = () => {
  const { tabs } = useSelector((root: RootState) => root.tabsReducer);
  const dispatch = useDispatch();

  const {
    isNotificationShown,
    notificationMessage,
    notificationColor,
    handleNotificationOpen,
    handleNotificationClose,
  } = useNotification();

  const currentTab = useGetTabFromParams();

  useEffect(() => {
    if (!currentTab) {
      return;
    }

    dispatch(loadDataInFormFromTab(currentTab));
  }, []);

  const getTabFromForm = useGetTabFromForm();

  const handleSubmit = useHandleSubmitTabForm(() => {
    if (!currentTab) {
      return;
    }

    const newTab = getTabFromForm(currentTab.id);

    dispatch(replaceTab(newTab));
    dispatch(setWasSave(true));

    handleNotificationOpen('Табулатура обновлена!', 'success');
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
        <Typography level="h2">Редактирование табулатуры</Typography>

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
