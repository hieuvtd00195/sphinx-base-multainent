import { Box, Container, IconButton, InputAdornment } from '@mui/material';
import Page from 'components/Page';
import PageBreadcrumbs from 'components/Page/PageBreadcrumbs';
import PageWrapper from 'components/Page/PageWrapper';
import ActionButton from 'components/ProButton/ActionButton';
import ProForm from 'components/ProForm';
import ProFormGroup from 'components/ProForm/ProFormGroup';
import ProFormLabel from 'components/ProForm/ProFormLabel';
import ProFormTextField from 'components/ProForm/ProFormTextField';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Validation from 'utils/Validation';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import type { MouseEvent } from 'types/react';
import ProTable from 'components/ProTable';

interface FormValues {
  password: string;
  repassword: string;
}
const Permissions = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);
  const form = useForm<FormValues>({
    mode: 'onChange',
  });

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword: MouseEvent = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword2 = () => {
    setShowPassword2((show) => !show);
  };

  const handleMouseDownPassword2: MouseEvent = (event) => {
    event.preventDefault();
  };
  const handleChange = () => {};
  const handleSubmit = async (values: FormValues) => {};
  return (
    <Page title={'Permissions'}>
      <PageWrapper title={t('Permissions')}>
        <PageBreadcrumbs title={t('permissions')} items={[]} />
        <Box
          sx={{
            backgroundColor: 'background.default',
            flexGrow: 1,
            display: 'grid',
            gridTemplateRows: '1fr auto',
            gap: 3,
            p: 3,
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: 0,
              gap: 10,
              marginTop: 5,
            }}
          >
            <Box style={{ width: '50%' }}>
              <ProTable
                title="Permissions List"
                pagination={{
                  page: 1,
                  pageSize: 10,
                  total: 30,
                  onPageChange: () => handleChange(),
                  onPageSizeChange: () => handleChange(),
                }}
                columns={[]}
                data={[]}
              ></ProTable>
            </Box>
          </Container>
        </Box>
      </PageWrapper>
    </Page>
  );
};

export default Permissions;
