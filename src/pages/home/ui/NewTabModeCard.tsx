import { useNavigateToPage } from '@/shared/lib';
import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  Stack,
  Tooltip,
  Typography,
} from '@mui/joy';
import type { FC, ReactNode } from 'react';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

interface NewTabModeCardProps {
  title: string;
  icon: ReactNode;
  path: string;
  ariaLabelName: string;
  description: string;
}

export const NewTabModeCard: FC<NewTabModeCardProps> = ({
  title,
  icon,
  path,
  ariaLabelName,
  description,
}) => {
  const handleClick = useNavigateToPage(path);

  return (
    <Card sx={{ flex: 1 }}>
      <Stack direction="row" alignItems={'center'} spacing={1}>
        <Tooltip title={description}>
          <InfoOutlineIcon fontSize="medium" />
        </Tooltip>

        <Typography level="h2">{title}</Typography>
      </Stack>

      <AspectRatio ratio={'1/1'} maxHeight={80}>
        {icon}
      </AspectRatio>

      <CardContent>
        <Button
          aria-label={`new-tab-mode-${ariaLabelName}`}
          onClick={handleClick}
          variant="soft"
        >
          Перейти
        </Button>
      </CardContent>
    </Card>
  );
};
