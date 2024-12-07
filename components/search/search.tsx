import { Loader } from "@mantine/core"
import { Search as SearchLucide } from "lucide-react"
import { Spotlight, spotlight } from '@mantine/spotlight';
import { ToggleSearch } from "@/components/search/toggleSearch";
import { useSearch } from "@/hooks/components/useSearch";

export const Search = () => {
  const {
    search,
    actions,
    handleChange,
    isLoading,
  } = useSearch();
  return (
    <>
      <ToggleSearch toggle={spotlight.open} />
      <Spotlight
        query={search}
        onQueryChange={handleChange}
        actions={actions}
        nothingFound="Sem resultados."
        highlightQuery
        searchProps={{
          rightSection: isLoading ? <Loader size="sm" /> : <SearchLucide size={18} />,
          placeholder: "O que deseja comprar hoje?",
        }}
      />
    </>
  )
}