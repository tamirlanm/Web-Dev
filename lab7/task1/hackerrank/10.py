if __name__ == '__main__':
    students = []  

    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    unique_grades = sorted(set(score for _, score in students))
    
    second_lowest = unique_grades[1]

    result = sorted([name for name, score in students if score == second_lowest])

    for name in result:
        print(name)
