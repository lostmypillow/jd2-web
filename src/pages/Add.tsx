import { useRef, useState } from "react";
import { linkGrabberApi} from "../api";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SendIcon from '@mui/icons-material/Send';
import * as React from "react";
export function Add() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [rawLinks, setRawLinks] = useState<string>("");
  const [autoStart, setAutoStart] = useState<boolean>(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  async function handlePasteClick() {
    try {
      const text = await navigator.clipboard.readText();
      if (!text) return;
      setRawLinks((prev) => (prev ? `${prev}\n${text}` : text));
      textareaRef.current?.focus();
    } catch {
      textareaRef.current?.focus();
    }
  }


  async function handleAddLink() {
      await linkGrabberApi.addLinks({
          assignJobID:true,
          autostart: autoStart,
          destinationFolder: '/home',
          links: rawLinks
      })
  }

  return (
    <div
      id="here"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "4px",
      }}
    >
      <div
        id="add-buttons"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          width: "100%",
          padding: "1ch",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={autoStart} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAutoStart(event.target.checked)} />}
            label="Autostart"
          />
        </FormGroup>
         {isMobile ? (
          <IconButton aria-label="Paste Links" onClick={handlePasteClick}>
            <ContentPasteIcon />
          </IconButton>
        ) : (
          <Button
            style={{ flex: 1, whiteSpace: "nowrap" }}
            variant="outlined"
            startIcon={<ContentPasteIcon />}
            onClick={handlePasteClick}
          >
            Paste Links
          </Button>
        )}
        <Button
          style={{ flex: 1, whiteSpace: "nowrap" }}
          variant="contained"
          startIcon={<SendIcon />}
          onClick={handleAddLink}
        >
          Send
        </Button>
       
      </div>

      <textarea
        ref={textareaRef}
        value={rawLinks}
        onChange={(e) => setRawLinks(e.target.value)}
        aria-label="empty textarea"
        placeholder="Enter download rawLinks here"
        style={{ width: "100%", flex: 1, minHeight: 0, resize: "none" }}
      />

      {/* {[linkCollectorGroup].map((group) => (
        <section key={group.name}>
          <h2>
            {group.name} (<code>{group.basePath}</code>)
          </h2>
          {group.endpoints.map((ep) => (
            <EndpointCard key={ep} endpoint={ep} />
          ))}
        </section>
      ))} */}
    </div>
  );
}
