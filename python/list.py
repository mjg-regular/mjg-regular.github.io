def distribute_names(participant_list):
    total_participants = len(participant_list)
    per_column = total_participants // 3 + (total_participants % 3 > 0)
    columns = [participant_list[i:i + per_column] for i in range(0, total_participants, per_column)]
    return columns

def generate_html(columns):
    html_content = '<div class="row">\n'
    for column in columns:
        html_content += '    <div class="participant-column">\n'
        for participant in column:
            participant_html = f'        <p><a href="certs/participants/{participant}.png" target="_blank">{participant}</a></p>\n'
            html_content += participant_html
        html_content += '        <!-- rest of participants... -->\n    </div>\n'
    html_content += '</div>'
    return html_content

def main():
    # Read participant names from the file with UTF-8 encoding specified
    with open("participants.txt", "r", encoding='utf-8') as file:
        participant_list = [line.strip() for line in file if line.strip()]

    # Distribute participants into three columns
    columns = distribute_names(participant_list)

    # Generate HTML content
    html_content = generate_html(columns)

    # Write HTML content to a new file
    with open("output.html", "w", encoding='utf-8') as file:
        file.write(html_content)

if __name__ == "__main__":
    main()
