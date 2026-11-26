import { useState } from 'react'
import { CONTROLLER_GROUPS } from '../api'
import { EndpointCard } from '../components/EndpointCard'
import { UpdateCard } from '../components/UpdateCard.tsx'

export function Home() {
  const [filter, setFilter] = useState('')
  const q = filter.trim().toLowerCase()

  const filteredGroups = CONTROLLER_GROUPS.map((group) => ({
    ...group,
    endpoints: group.endpoints.filter(
      (ep) => !q || group.name.toLowerCase().includes(q) || ep.toLowerCase().includes(q),
    ),
  })).filter((g) => g.endpoints.length > 0)

  return (
    <main>
      <h1>JD2 API Bootstrap</h1>

      <p>
        <label>
          Filter endpoints:{' '}
          <input
            type="search"
            value={filter}
            placeholder="e.g. downloadsV2, GET, /add"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </p>

      {filteredGroups.map((group) => (
        <section key={group.name}>
          <h2>
            {group.name} (<code>{group.basePath}</code>)
          </h2>
          {group.endpoints.map((ep) => (
            <EndpointCard key={ep} endpoint={ep} />
          ))}
        </section>
      ))}
    </main>
  )
}

