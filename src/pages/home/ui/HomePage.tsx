import { TabsWrapper } from "@/widgets/tabs-wrapper";
import { Button, Input, Stack, Typography } from "@mui/joy";
import type { FC } from "react";
import { useNavigate } from "react-router";

interface HomePageProps {
  pathToNewTabPage: string;
}

export const HomePage: FC<HomePageProps> = ({ pathToNewTabPage }) => {
  const navigate = useNavigate();
  const handleCreateTabClick = () => {
    navigate(pathToNewTabPage, {
      relative: 'path'
    })
  }

  return (
    <Stack spacing={2}>
      <Typography level="h2">Главная</Typography>

      <Stack spacing={2}>
        <Button onClick={handleCreateTabClick}>Создать табулатуру</Button>

        <Input placeholder="Поиск табулатур" />
      </Stack>

      <TabsWrapper />
    </Stack>
  )
}