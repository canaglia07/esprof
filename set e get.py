class Libro:
    def _init_(self, titolo, anno, autore):
        self.titolo = titolo
        self.anno = anno
        self.autore = autore

    def set_titolo(self, titolo):
        self.titolo = titolo

    def get_titolo(self):
        return self.titolo

    def set_anno(self, anno):
        self.anno = anno

    def get_anno(self):
        return self.anno

    def set_autore(self, autore):
        self.autore = autore

    def get_autore(self):
        return self.autore

    def _str_(self):
        return f"Titolo: {self.titolo}, Anno: {self.anno}, Autore: {self.autore}"


libro = Libro("Il Signore degli Anelli", 1954, "J.R.R. Tolkien")
print(libro)

libro.set_titolo("Lo Hobbit")
print(libro.get_titolo())