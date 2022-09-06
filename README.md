# The ticket

- `docker compose up -d`
- `docker compose up -d --build`
- `docker compose -f docker-compose.dev.yml up -d --build`

## LISTA

    1.  Wykorzystanie dockera do postawienia kontenerów z 'Baza danych' i 'RabbitMQ'.
    2.  Stworzenie aplikacji frontendowej (strona główna)  z wykorzystaniem frameworku Angular w wersji 12.
    3.  Stworzenie aplikacji frontendowej (zakładka logowanie/rejestracja)  z wykorzystaniem frameworku Angular w wersji 12.
    4.  Stworzenie kontrolerów oraz modeli z wykorzystaniem .NET 6.
    5.  Zastosowanie mappera
    6.  Stworzenie logiki logowania/wylogowywania.
    7.  Stworzenie logiki rejestracji.
    8.  Podłączenie Swagerra.
    9.  Stworzenie routingu po endpointach.
    10.  Wykorzystanie JWT do autoryzacji użytkownika dla endpointów umożliwiających zakup biletu na wydarzenie oraz pobranie nazwy użytkownika.
    11.  Stworzenie obrazu dockera o nazwie 'TicketSender' umożliwiającego nam odbiór danyc z kolejki 'RabbtMQ'
    12. Wykorzystanie bazy danych MySQL w wersji 'Express', połączenie do bazy.
    13. Utworzenie bazy składającej się z 4 tabel 'Event', 'User', 'TicketOption' oraz 'Order'
    14. Zastosowanie nginx jako reverse proxy.
    15. Utworzenie logiki kupowania biletu.
    16. Wykorzystanie skryptu "wait-for-it.sh" przy komunikacji z RabbitMQ
