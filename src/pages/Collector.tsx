import {type CrawledLink, linkCrawlerGroup, linkGrabberApi, linkGrabberGroup} from "../api";
import { EndpointCard } from "../components/EndpointCard";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

export function Collector() {
  const [isCollecting, setIsCollecting] = useState<boolean>(false)
  const retrieveCollectingStatus = async () => {
    setIsCollecting(await linkGrabberApi.isCollecting())
  }

  async function fetchAllCrawledPackagesAndLinks() {
    const packages = await linkGrabberApi.queryPackages([{
      childCount: true,
      enabled: true,
      hosts: true,
      saveTo: true,
      status: true,
      bytesTotal: true,
    }])

    const packageUUIDs = packages.map((pkg) => pkg.uuid).filter((id): id is number => id != null)

    const links = await linkGrabberApi.queryLinks([{
      packageUUIDs: packageUUIDs.length > 0 ? packageUUIDs : undefined,
      url: true,
      availability: true,
      bytesTotal: true,
      enabled: true,
      host: true,
    }])

    const linksByPackage = new Map<number, CrawledLink[]>()
    for (const link of links) {
      if (link.packageUUID != null) {
        const group = linksByPackage.get(link.packageUUID) ?? []
        group.push(link)
        linksByPackage.set(link.packageUUID, group)
      }
    }

    return packages.map((pkg) => ({
      pkg,
      links: pkg.uuid != null ? (linksByPackage.get(pkg.uuid) ?? []) : [],
    }))
  }

  return (
    <>
      <List>
        <ListItem
            secondaryAction={
              <IconButton
                  onClick={retrieveCollectingStatus}
                  edge="end"
                  aria-label="delete"
              >
                <RefreshIcon />
              </IconButton>
            }
        >
          {" "}
          isCollecting: {isCollecting.toString()}
        </ListItem>
      </List>

      {[linkCrawlerGroup, linkGrabberGroup].map((group) => (
        <section key={group.name}>
          <h2>
            {group.name} (<code>{group.basePath}</code>)
          </h2>
          {group.endpoints.map((ep) => (
            <EndpointCard key={ep} endpoint={ep} />
          ))}
        </section>
      ))}
    </>
  );
}
