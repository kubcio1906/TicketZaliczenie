# The ticket

- `docker compose up -d`
- `docker compose up -d --build`
- `docker compose -f docker-compose.dev.yml up -d --build`

## LISTA

    1.  Wykorzystanie dockera do postawienia kontenerów z 'Baza danych' i 'RabbitMQ'.
    2.  Stworzenie aplikacji frontendowej z wykorzystaniem frameworku Angular w wersji 12.
    3.  Stworzenie aplikacji backendowej z wykorzystaniem .NET 6.
    4.  Wykorzystanie JWT do autoryzacji użytkownika dla endpointów umożliwiających zakup biletu na wydarzenie oraz pobranie nazwy użytkownika.
    5.  Stworzenie obrazu dockera o nazwie 'TicketSender' umożliwiającego nam odbiór danyc z kolejki 'RabbtMQ', serwis ten działa jako 'Consumer' ściągając nam dane z kolejki o nazwie 'something'.
    6.  Wykorzystanie bazy danych MySQL w wersji 'Express' która zostaje zasilona danymi przez nasz backend. Składa się z 4 tabel 'Event', 'User', 'TicketOption' oraz 'Order'
    7.  Każdy zakup biletu kończy się wysłaniem modelu 'Order' na naszą kolejkę. Nasz backend w tym przypadku działa jako 'Producer' odpowiadając za wrzucenie danych do kolejki o nazwie 'something'
    8.  Aplikacja frontendowa na wstępie pokazuje nam listę dostępnych eventów. W prawym górnym rogu możemy przejśc do sekcji logowania/rejestracji w przypadku gdy użytkownik jest już zalogowany to ujrzy nazwę którą podał przy rejestracji i przycisk umożliwiający wylogowanie się. Po wyborze interesującego nas eventu zobaczymy listę z opcją zakupu biletu na wydarzenie w danym mieście.
    9.
    10.
    11.
    12.
    13.
    14.
    15.
    16.
