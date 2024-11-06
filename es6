class Libro:
    def _init_(self, titolo, autore, pagine):
        self.titolo = titolo
        self.autore = autore
        self.pagine = pagine

    def _str_(self):
        return f"{self.titolo}, {self.autore}, {self.pagine} pagine"


class Biblioteca:
    def _init_(self):
        self.libri = []

    def aggiungi_libro(self, libro):
        self.libri.append(libro)

    def salva_su_file(self, nome_file="biblioteca.txt"):
        try:
            with open(nome_file, 'w') as file:
                for libro in self.libri:
                    file.write(str(libro) + "\n")
            print("File salvato con successo.")
        except IOError:
            print("Errore durante il salvataggio del file.")


biblioteca = Biblioteca()
biblioteca.aggiungi_libro(Libro("Il nome della rosa", "Umberto Eco", 512))
biblioteca.aggiungi_libro(Libro("La divina commedia", "Dante Alighieri", 798))

biblioteca.salva_su_file()
