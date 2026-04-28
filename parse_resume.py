import pypdf

try:
    reader = pypdf.PdfReader('d:\\Projects\\portfolio\\Hariharasudhan-Resume.pdf')
    with open('resume_text.txt', 'w', encoding='utf-8') as f:
        for page in reader.pages:
            f.write(page.extract_text() + "\n")
    print("Done")
except Exception as e:
    print(f"Error: {e}")
