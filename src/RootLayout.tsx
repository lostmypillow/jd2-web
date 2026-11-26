import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CssBaseline,
  Paper,
  SvgIcon,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AddIcon from "@mui/icons-material/Add";
import { Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
const NAV_ITEMS = [
  {
    label: "Home",
    to: "/",
    icon: <HomeFilledIcon />,
  },
  {
    label: "Packages",
    to: "/packages",
    icon: (
      <SvgIcon>
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
      </SvgIcon>
    ),
  },
  {
    label: "Add",
    to: "/add",
    icon: <AddIcon />,
  },
  {
    label: "Collector",
    to: "/collector",
    icon: <PlaylistAddIcon />,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: (
      <SvgIcon>
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z" />
      </SvgIcon>
    ),
  },
] as const;

export function RootLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  const currentTab = NAV_ITEMS.some((item) => item.to === pathname)
    ? pathname
    : false;

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100dvh" }}>
        {!isMobile && (
          <Tabs
            value={currentTab}
            onChange={(_, to: string) => navigate({ to })}
            sx={{ flexShrink: 0 }}
          >
            {NAV_ITEMS.map((item) => (
              <Tab key={item.to} label={item.label} value={item.to} />
            ))}
          </Tabs>
        )}

        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            p: 2,
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>

        {isMobile && (
          <Paper sx={{ flexShrink: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={currentTab}
              onChange={(_, to: string) => navigate({ to })}
            >
              {NAV_ITEMS.map((item) => (
                <BottomNavigationAction
                  key={item.to}
                  label={item.label}
                  value={item.to}
                  icon={item.icon}
                  sx={{ minWidth: 0, px: 0.5 }}
                />
              ))}
            </BottomNavigation>
          </Paper>
        )}
      </Box>
    </>
  );
}
