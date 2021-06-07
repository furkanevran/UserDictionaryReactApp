using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDictionaryReactApp.Helpers;

namespace UserDictionaryReactApp.Controllers
{

    [Route("api/[controller]")]
    public class FileController : Controller
    {
        private readonly FileHelper _fileHelper;
        public FileController(FileHelper fileHelper)
        {
            _fileHelper = fileHelper;
        }

        [HttpPost]
        [Route(nameof(UploadImage))]
        public JsonResult UploadImage(IFormFile file)
        {
            if (file == null || !(file != null && _fileHelper.IsImage(file)))
            {
                return new JsonResult(new { })
                {
                    StatusCode = 400
                };
            }

            return new JsonResult(new
            {
                fileName = _fileHelper.CopyFile(file)
            });
        }
    }
}
