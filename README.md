import csv

class Prodotto:
    def __init__(self, nome, prezzo, quantita):
        self.nome = nome
        self.prezzo = prezzo
        self.quantita = quantita

class Magazzino:
    def __init__(self):
        self.prodotti = []

    def aggiungi_prodotto(self, prodotto):
        self.prodotti.append(prodotto)

    def salva_su_file(self, nome_file):
        with open(nome_file, mode='w', newline='') as file:
            writer = csv.writer(file)
            for prodotto in self.prodotti:
                writer.writerow([prodotto.nome, prodotto.prezzo, prodotto.quantita])

# Esempio di utilizzo:
magazzino = Magazzino()
magazzino.aggiungi_prodotto(Prodotto("Mela", 0.5, 10))
magazzino.aggiungi_prodotto(Prodotto("Arancia", 0.7, 20))
magazzino.salva_su_file("magazzino.csv")
