from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name ='home'),
    path('homepage/', views.homepage, name='homepage'),
    path('cadastro/',views.cadastro,name='cadastro'),
    path('docad/',views.docad, name='docad'),
    path('dologin/', views.dologin, name='dologin'),
    path('login/', views.login, name='login'),
    path('dologout/', views.dologout, name='dologout'),
    path('perfil/', views.profile, name='perfil'),
    path('doupdate/', views.do_update, name='doupdate'),
    path('comentario/', views.comentario, name='comentario'),
    path('comentario/<int:id>/editar/',views.edit_coment, name='edit_coment'),
    path('agendamento/',views.agendamento,name='agendamento'),

]
