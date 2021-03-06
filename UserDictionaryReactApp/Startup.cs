using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using UserDictionaryReactApp.Data;
using UserDictionaryReactApp.DTOs;
using UserDictionaryReactApp.Helpers;
using UserDictionaryReactApp.Models;
using UserDictionaryReactApp.RequestModels;

namespace UserDictionaryReactApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<UserDictionaryContext>(builder => builder.UseSqlServer(Configuration.GetConnectionString("UserDictionaryContext")));

            services.AddAutoMapper(cfg =>
            {
                cfg.CreateMap<User, UserRequestModel>();
                cfg.CreateMap<UserRequestModel, User>().ForMember(x => x.Id, opt => opt.Ignore()).ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));
                cfg.CreateMap<User, User>().ForMember(x => x.Id, opt => opt.Ignore()).ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

                cfg.CreateMap<User, UserDTO>();
                cfg.CreateMap<ContactInformation, ContactInformationDTO>().ForMember(x => x.Type, opt => opt.MapFrom(y => y.Type.ToString()));
            });

            services.AddDatabaseDeveloperPageExceptionFilter();
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddScoped<FileHelper>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();
            

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
