using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using minimal_api.Dominio.Entidades;

namespace Test.Domain.Entidades
{
    [TestClass]
    public class VeiculoTest
    {
        [TestMethod]
        public void TestGetSetPropriedades()
        {
            //Arrange
            var vei = new Veiculo();

            vei.Id = 1;
            vei.Nome = "teste";
            vei.Marca = "teste";
            vei.Ano = 2000;

            //Assert
            Assert.AreEqual(1, vei.Id);
            Assert.AreEqual("teste", vei.Nome);
            Assert.AreEqual("teste", vei.Marca);
            Assert.AreEqual(2000, vei.Ano);
        }
    }
}