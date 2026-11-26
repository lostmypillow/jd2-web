import { useState } from "react";
import { updateApi, jdApi, deviceApi } from "../api";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
export function Settings() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [combinedVersion, setCombinedVersion] = useState("N/A");
  const [uptime, setUptime] = useState("");
  async function getUpdateStatus() {
    setUpdateAvailable(await updateApi.isUpdateAvailable());
  }
  async function checkForUpdate() {
    await updateApi.runUpdateCheck();
    await getUpdateStatus();
  }
  async function restartAndUpdate() {
    await updateApi.restartAndUpdate();
  }

  async function getVersionAndRevision() {
    setCombinedVersion(
      (await jdApi.version()).toString() +
        " Revision " +
        (await jdApi.revision()).toString(),
    );
  }

  async function getUptime() {
    const ms = await jdApi.uptime();
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setUptime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  }

  async function pingDevice() {
    console.log(await deviceApi.ping())
  }
  return (
    <List>
      <ListItem
        secondaryAction={
          <IconButton
            onClick={getVersionAndRevision}
            edge="end"
            aria-label="delete"
          >
            <RefreshIcon />
          </IconButton>
        }
      >
        {" "}
        Version: {combinedVersion}
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton onClick={getUptime} edge="end" aria-label="delete">
            <RefreshIcon />
          </IconButton>
        }
      >
        Uptime:
        <span style={{ fontFamily: "monospace" }}>
          {"\u00A0"}
          {uptime}
        </span>
      </ListItem>
      <ListItem
        secondaryAction={
          <IconButton onClick={checkForUpdate} edge="end" aria-label="delete">
            <RefreshIcon />
          </IconButton>
        }
      >
        Updates: {updateAvailable ? "Update is available" : "None (up to date)"}
      </ListItem>
      {/* <Button onClick={getUpdateStatus}>trigger update (temporary)</Button> */}
      <ListItem>
        <Button
          variant="contained"
          onClick={restartAndUpdate}
          disabled={!updateAvailable}
        >
          Restart and Update
        </Button>
      </ListItem>

      <ListItem>
        <Button onClick={pingDevice} variant="contained">Ping</Button>
      </ListItem>
    </List>
  );
}
