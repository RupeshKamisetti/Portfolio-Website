# contact/views.py

from django.shortcuts import render
from .forms import ContactForm

def contact_view(request):
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Process form data (example: print to console)
            print(form.cleaned_data)  # This will print form data to console
            # Add your logic here to handle form submission

            # Clear form after successful submission (optional)
            form = ContactForm()

    return render(request, 'index.html', {'form': form})
