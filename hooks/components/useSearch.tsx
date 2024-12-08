import { useEffect, useState, useTransition } from "react";
import { useDebouncedCallback, useLocalStorage } from "@mantine/hooks";
import { SpotlightActionGroupData, spotlight } from '@mantine/spotlight';
import { useRouter } from "next/navigation";

interface DataType {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface HandleUsingValidDataProps {
  data: DataType[];
  title: string;
}

interface UseSearchReturn {
  search: string | undefined;
  actions: SpotlightActionGroupData[];
  handleChange: (search: string) => void;
  isLoading: boolean;
}

export const useSearch = (): UseSearchReturn => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [history, setHistory] = useLocalStorage<DataType[]>({
    key: 'history-dataSearch',
    defaultValue: [],
  });
  const [search, setSearch] = useState<string>();
  const [actions, setActions] = useState<SpotlightActionGroupData[]>([]);

  const addToHistory = (item: DataType) => {
    setHistory((history) => {
      const filtered = history.filter((historyItem: DataType) => historyItem.id !== item.id);
      const updated = [item, ...filtered];
      return updated.slice(0, 5);
    });
  };

  const handleActionClickOption = (item: DataType) => {
    spotlight.close();
    addToHistory(item);
    router.push(`/produto/${item.id}`);
  }
  
  const processData = (data: DataType[]): SpotlightActionGroupData["actions"] => {
    return data.map((item) => ({
      id: item.id.toString(),
      label: item.name,
      description: item.price.toString(),
      leftSection: <img src={item.image} alt={item.name} />,
      onClick: () => handleActionClickOption(item),
    }));
  }
  
  const handleUsingValidData = ({data, title}: HandleUsingValidDataProps): SpotlightActionGroupData[] => {
    const actions: SpotlightActionGroupData = { group: title, actions: [] };
    const parseData = processData(data);
    actions.actions = parseData;

    return [actions];
  }

  const handleSearch = useDebouncedCallback(async (search: string) => {
    startTransition(async () => {
      const isValidSearch: boolean = search.trim().length > 0;
      const result: DataType[] = isValidSearch
        ? [
            { id: 1, image: "image-url-1", name: "Item 1", price: 100 },
            { id: 2, image: "image-url-2", name: "Item 2", price: 200 },
            { id: 3, image: "image-url-3", name: "Item 3", price: 300 },
            { id: 4, image: "image-url-4", name: "Item 4", price: 400 },
            { id: 5, image: "image-url-5", name: "Item 5", price: 500 },
          ]
        : history;

      const validData = handleUsingValidData({
        data: result,
        title: isValidSearch ? "Resultados" : "Histórico",
      });

      setActions(validData);
    });
  }, 500);

  const handleChange = (searchQuery: string) => {
    if (search === searchQuery) return;
    setSearch(searchQuery);
    handleSearch(searchQuery);
  };

  useEffect(() => {
    handleChange(search || "");
  }, [search]);

  return {
    search,
    actions,
    handleChange,
    isLoading: isPending,
  }
}