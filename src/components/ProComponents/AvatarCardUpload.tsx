import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
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
    accept:{
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
    <Box
      sx={{
        border: 3,
        borderRadius: 50,
        borderStyle: 'dashed',
        borderColor: 'divider',
        height: 200,
        width: 200,
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
      <input {...getInputProps()} />
      {!src && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 120,
          }}
        >
          <AddIcon fontSize="large" color="action" />
        </Box>
      )}
    </Box>
  );
};

export default AvatarCardUpload;
