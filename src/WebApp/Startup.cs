using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace WebApp
{
    public class Startup
    {
        public Startup( IHostingEnvironment env )
        {
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .AddJsonFile("config/appsettings.json")
                .AddJsonFile($"config/appsettings.{env.EnvironmentName}.json", optional: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build()
                                .ReloadOnChanged("config/appsettings.json")
                                .ReloadOnChanged($"config/appsettings.{env.EnvironmentName}.json");
        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices( IServiceCollection services )
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory )
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseIISPlatformHandler();

            //app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute("default",
                                "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute("spa-fallback",
                                "{*anything}",
                                new { controller = "Home", action = "Index" });
            });
        }

        // Entry point for the application.
        public static void Main( string[] args ) => WebApplication.Run<Startup>(args);
    }
}