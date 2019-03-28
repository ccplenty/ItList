<?php
 
namespace ItList\Providers;
 
 
use Plenty\Plugin\ServiceProvider;
 
class ItListServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->getApplication()->register(ItListRouteServiceProvider::class);
    }
}
