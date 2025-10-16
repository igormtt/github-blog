import { useContext, useState } from "react";
import {
  FormComponent,
  FormGroup,
  FormItems,
  FormTitle,
  Publications,
} from "./style";
import { useGithub } from "../../hooks/useGithub";

export function Form() {
  const ghContext = useContext(useGithub);
  const [query, setQuery] = useState<string>("");

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    e.preventDefault();
    setQuery(value);

    await ghContext.findIssue(value);
  }

  return (
    <FormComponent>
      <FormItems>
        <FormGroup>
          <FormTitle>
            <p>Publicações</p>
          </FormTitle>

          <Publications>
            <p>{ghContext.issues?.length ?? 0} publicações</p>
          </Publications>
        </FormGroup>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={query}
          onChange={handleSearch}
        />
      </FormItems>
    </FormComponent>
  );
}
