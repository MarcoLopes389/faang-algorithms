Para resolver este algoritmo deve-se pensar que dada uma string "abcbc" deve-se considerar "abc", "bc", "cb", "bc" como possíveis combinações de string, sendo assim deve-se percorrer índice por índice montando substrings e assim que se repetir um elemento começar do índice seguinte. Depois das substrings montadas avaliar qual possui maior índice.