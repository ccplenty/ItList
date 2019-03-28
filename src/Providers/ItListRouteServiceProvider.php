<?php
 
namespace ItList\Providers;
 
 
use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\Router;
 
class ItListRouteServiceProvider extends RouteServiceProvider
{
    public function map(Router $router)
    {
        $router->get('ItList', 'ItList\Controllers\ContentController@showTopItems');
    }
}
