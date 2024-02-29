import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

describe('Tabela', () => {
  it('Verifica se as colunas da tabela possuem os nomes corretos', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Car')).toBeInTheDocument();
    expect(getByText('Next Reservation')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Rating')).toBeInTheDocument();
    expect(getByText('Actions')).toBeInTheDocument();
  });
});
