from django.views.generic import TemplateView


class IndexPageView(TemplateView):
    template_name = 'bikin/index.html'


class ChangeLanguageView(TemplateView):
    template_name = 'main/change_language.html'

class ChangeHomeView(TemplateView):
    template_name = 'bikin/index.html'

class ChangeProfileView(TemplateView):
    template_name = 'bikin/profile_index.html'


class SearchView(TemplateView):
    template_name = 'bikin/search.html'
