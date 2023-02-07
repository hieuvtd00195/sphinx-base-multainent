import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ActionButton from 'components/ProButton/ActionButton';
import type { DropzoneOptions } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

interface FileDropzoneProps extends DropzoneOptions {
  onRemove?: (file: File) => void;
  onRemoveAll?: () => void;
  onUpload?: () => void;
  src?: string;
  error?: string | null;
}

const AvatarCardUpload = (props: FileDropzoneProps) => {
  const { src, error, accept, maxFiles, maxSize, minSize, onDrop } = props;

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
    maxFiles,
    maxSize,
    minSize,
    onDrop,
    multiple: false,
  });

  return (
    <Container>
      <Box
        sx={{
          border: 3,
          borderRadius: 50,
          borderStyle: 'dashed',
          borderColor: 'divider',
          height: 200,
          width: 200,
		  boxShadow: '5px 3px 10px 0 rgb(21 15 15 / 10%)',
          position: 'relative',
          ...(src && {
            backgroundImage: `url(${src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
			
            cursor: 'pointer',
          }),
          ...(error && {
            borderColor: 'error.main',
          }),
        }}
        {...getRootProps()}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 120,
			position: 'absolute',
			left: 15,
			bottom: -90
          }}
        >
          {/* <AddIcon fontSize="large" color="action" /> */}
          <Box sx={{ mt: 3 }}>
            <ActionButton
              size="large"
              type="submit"
              actionType="camera"
              // onClick={() => getInputProps()}
              // loading={form.formState.isSubmitting}
            >
              Change Avatar<input {...getInputProps()} />
            </ActionButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AvatarCardUpload;
