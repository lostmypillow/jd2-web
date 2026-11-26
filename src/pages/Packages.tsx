import { downloadsV2Group, downloadControllerGroup, downloadEventsGroup } from "../api";
import { EndpointCard } from "../components/EndpointCard";
export function Packages() {
  return (
    <>
          {[downloadsV2Group, downloadEventsGroup, downloadControllerGroup].map((group) => (
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
  )
}

