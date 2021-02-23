using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models.Gifts;

namespace gift_list_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GiftListController : ControllerBase
    {
        private readonly ILogger<GiftListController> _logger;

        public GiftListController(ILogger<GiftListController> logger)
        {
            _logger = logger;
        }

        #region Get
        public GiftList GetList(int Id)
        {
            var list = new GiftList();
            return list;
        }

        public List<GiftList> GetLists(int Id)
        {
            var lists = new List<GiftList>();
            return lists;
        }
        #endregion

    }
}
