import random
import os
from datetime import date


def kosc_100():
	return random.randint(1, 100)


def kosc_10():
	return random.randint(1, 10)


def log_entry(log_file, suma, wartosci, rodzaj_kosci, ilosc, comment):
	today = date.today()
	log_str = (str(today) + "\n" + str(suma) + " = " + str(wartosci) + "\n" + 
		"Ilosc kosci: " + str(ilosc) + "\n" + "Rodzaj kosci: " + str(rodzaj_kosci) + "\n" +
		"Komentarz: \"" + str(comment) + "\"" + "\n" + "-" * 50)
	log_file.write(log_str + "\n")


def main():
	exit = False
	log_file = open("logi_rzutow.txt", "a")

	while not exit:
		userInput = input("Jaka koscia i ile razy chcesz rzucic? (10 lub 100 i " +
			"ilosc w formacie KOSC;ILOSC): \n")
		comment = input("Podaj komentarz do rzutu: \n")

		kosc, ilosc = userInput.split(";", 2)
		kosc = int(kosc)
		ilosc = int(ilosc)
		wartosci = []

		if int(kosc) == 10:
			for x in range(0, ilosc):
				wartosci.append(kosc_10())
		elif int(kosc) == 100:
			for x in range(0, ilosc):
				wartosci.append(kosc_100())

		print("\nWartosc rzutu:")
		for x in range(0, len(wartosci)):
			if x != len(wartosci) - 1:
				print(wartosci[x], end=" + ")
			else:
				print(wartosci[x], end=" = ")

		suma = 0
		for wartosc in wartosci:
			suma += wartosc
		print(suma)

		log_entry(log_file, suma, wartosci, kosc, ilosc, comment)

		exit_string = input("\nCzy chcesz kontynuowac? T - tak, N - nie\n")
		if exit_string.lower().strip() == "t" or exit_string.lower().strip() == "tak":
			exit = False
			print("")
			clearConsole = lambda: os.system('cls' if os.name in ('nt', 'dos') else 'clear')
			clearConsole()
		elif exit_string.lower().strip() == "n" or exit_string.lower().strip() == "nie":
			exit = True

	log_file.close()


if __name__ == "__main__":
	main()